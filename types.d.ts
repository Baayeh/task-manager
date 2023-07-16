interface ImageLoader {
  src: string;
  width: number;
  quality?: number;
}

interface NavLinks {
  name: string;
  icon: IconType;
  href: string;
}

interface Task {
  id: string;
  title: string;
  priority: string;
  status: string;
  start_date: string;
  end_date: string;
}

interface Project {
  id: string;
  title: string;
  status: string;
  start_date: string;
  end_date: string;
  tasks: Task[];
}

interface ProjectsViewProps {
  projects: Project[];
  totalProjects: number;
  rows: number;
  first: number;
  setFirst: (first: number) => void;
  setRows: (rows: number) => void;
}
