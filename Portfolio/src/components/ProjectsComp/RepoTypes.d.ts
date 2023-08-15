export interface ProjectInfo {   
    created_at: string;    
    id: number;
    language: string | null;  
    name: string;   
    owner: {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
    }; 
    size: number; 
    stargazers_count: number;   
    updated_at: string;    
    visibility: string; 
    video: string,
    image: string,
    [propName: string]: unknown;  
  }