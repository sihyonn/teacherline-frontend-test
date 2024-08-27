interface CommonModalProps {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
}

interface CommonPagingResult<T> {
  next: string;
  previous: string;
  count: number;
  current_page: number;
  total_pages: number;
  results: T[];
}
