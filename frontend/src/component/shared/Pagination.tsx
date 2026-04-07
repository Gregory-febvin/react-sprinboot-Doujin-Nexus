interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onFirst: () => void;
  onLast: () => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  onFirst,
  onLast,
}) => {
  return (
    <div className='flex justify-center gap-2 mt-10 mb-10'>
      <button
        onClick={onFirst}
        disabled={currentPage === 1}
        className='bg-[#4d4d4d] hover:bg-[#5d5d5d] disabled:opacity-50 text-white px-4 py-2 rounded transition'
      >
        «
      </button>

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className='bg-[#4d4d4d] hover:bg-[#5d5d5d] disabled:opacity-50 text-white px-4 py-2 rounded transition'
      >
        ‹
      </button>

      <div className='flex items-center gap-2'>
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          const pageNum = currentPage > 3 ? currentPage - 2 + i : i + 1;
          if (pageNum > totalPages) return null;

          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`px-3 py-2 rounded transition ${
                currentPage === pageNum
                  ? 'bg-blue-500 text-white'
                  : 'bg-[#4d4d4d] hover:bg-[#5d5d5d] text-white'
              }`}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className='bg-[#4d4d4d] hover:bg-[#5d5d5d] disabled:opacity-50 text-white px-4 py-2 rounded transition'
      >
        ›
      </button>

      <button
        onClick={onLast}
        disabled={currentPage === totalPages}
        className='bg-[#4d4d4d] hover:bg-[#5d5d5d] disabled:opacity-50 text-white px-4 py-2 rounded transition'
      >
        »
      </button>

      <div className='text-white'>
        Page {currentPage} / {totalPages}
      </div>
    </div>
  );
};