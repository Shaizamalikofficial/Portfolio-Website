export type Project = {
  name: string
  summary: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  metrics?: string
  coverImage?: string
}

export const projects: Project[] = [
  {
    name: 'Siber Koza & Aset AI Course',
    summary: 'ML modules + hands-on tasks (2025)',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
  },
  {
    name: 'Final Project: Sleep Disorders Diagnosis',
    summary:
      'Intelligent system to detect and classify sleep disorders using ML (Logistic Regression, KNN, SVM). Achieved >90% diagnostic accuracy with robust preprocessing and feature engineering.',
    technologies: ['EDA', 'Feature Engineering', 'LogReg', 'KNN', 'SVM'],
    metrics: '90%+ accuracy',
  },
  {
    name: 'Xeven Solution AI Course',
    summary: 'Python fundamentals, real-world AI applications, TensorFlow practice.',
    technologies: ['Python', 'TensorFlow', 'Jupyter'],
  },
]

export const skills: string[] = [
  'Python',
  'NumPy',
  'Pandas',
  'Matplotlib',
  'Seaborn',
  'Scikit-learn',
  'Machine Learning',
  'Supervised Learning',
  'Unsupervised Learning',
  'Data Preprocessing',
  'Data Visualization',
  'Feature Engineering',
  'Model Evaluation',
  'ANN',
  'Jupyter Notebook',
  'VS Code',
  'GitHub',
]

export const links = {
  email: 'mailto:malikshaiza07@gmail.com',
  linkedin: 'https://linkedin.com/in/shaizamalik/',
  github: 'https://github.com/Shaizamalikofficial',
}


