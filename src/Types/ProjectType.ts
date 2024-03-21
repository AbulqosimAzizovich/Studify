export interface ProjectListNavProps {
    activeTab: string;
    setActiveTab: (value: string) => void;
}

export interface ProjectListTabProp {
    activeTab: string;
}

export interface ProjectListDataProp {
    title: string;
    id: number;
    badge: string;
    image: string;
    description: string;
    issue: string;
    resolved: string;
    comment: string;
    like: string;
    progress: string;
    customer1: string;
    customer2: string;
    customer3: string;
    sites: string;
}
export interface CommonProjectListProps {
    item: ProjectListDataProp;
}

export interface RegisterType {
    description: string;
    title: string;
    client_name: string;
    rate: number;
  }