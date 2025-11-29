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
    name: 'Final Project: Sleep Disorders Diagnosis',
    summary:
      'Intelligent system to detect and classify sleep disorders using ML (Logistic Regression, KNN, SVM). Achieved >90% diagnostic accuracy with robust preprocessing and feature engineering.',
    technologies: ['EDA', 'Feature Engineering', 'LogReg', 'KNN', 'SVM'],
    metrics: '90%+ accuracy',
  },
]

export const skills: string[] = [
  'Python',
  'NumPy',
  'Pandas',
  'Scikit-learn',
  'Matplotlib & Seaborn',
  'Model Building',
  'Model Evaluation',
]

export const links = {
  email: 'mailto:malikshaiza07@gmail.com',
  linkedin: 'https://linkedin.com/in/shaizamalik/',
  github: 'https://github.com/Shaizamalikofficial',
}
