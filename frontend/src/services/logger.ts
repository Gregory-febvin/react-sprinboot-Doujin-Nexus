const LOGSTASH_URL = import.meta.env.VITE_LOGSTASH_URL || 'http://localhost:5000';

export interface LogEntry {
  timestamp: string;
  level: 'INFO' | 'WARN' | 'ERROR' | 'DEBUG';
  message: string;
  source: 'frontend';
  page?: string;
  userAgent?: string;
  url?: string;
}

class Logger {
  private sendToLogstash(entry: LogEntry) {
    // Ne pas bloquer si Logstash n'est pas disponible
    fetch(LOGSTASH_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entry),
    }).catch(err => {
      // Erreur silencieuse si Logstash n'est pas dispo
      console.debug('Logstash unavailable:', err.message);
    });
  }

  info(message: string, data?: any) {
    console.log(message, data);
    this.sendToLogstash({
      timestamp: new Date().toISOString(),
      level: 'INFO',
      message: `${message}${data ? ' ' + JSON.stringify(data) : ''}`,
      source: 'frontend',
      page: window.location.pathname,
      url: window.location.href,
      userAgent: navigator.userAgent,
    });
  }

  warn(message: string, data?: any) {
    console.warn(message, data);
    this.sendToLogstash({
      timestamp: new Date().toISOString(),
      level: 'WARN',
      message: `${message}${data ? ' ' + JSON.stringify(data) : ''}`,
      source: 'frontend',
      page: window.location.pathname,
      url: window.location.href,
      userAgent: navigator.userAgent,
    });
  }

  error(message: string, error?: any) {
    console.error(message, error);
    this.sendToLogstash({
      timestamp: new Date().toISOString(),
      level: 'ERROR',
      message: `${message}${error ? ' ' + (error.message || error.toString()) : ''}`,
      source: 'frontend',
      page: window.location.pathname,
      url: window.location.href,
      userAgent: navigator.userAgent,
    });
  }

  debug(message: string, data?: any) {
    console.debug(message, data);
    this.sendToLogstash({
      timestamp: new Date().toISOString(),
      level: 'DEBUG',
      message: `${message}${data ? ' ' + JSON.stringify(data) : ''}`,
      source: 'frontend',
      page: window.location.pathname,
      url: window.location.href,
      userAgent: navigator.userAgent,
    });
  }
}

export const logger = new Logger();