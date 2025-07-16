import { Project } from '@/app/projects'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'


interface AppStore {
  project: Project | null
  setProject: (project: Project | null) => void
}

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      project: null,
      setProject: (project) => set({ project }),
    }),
    {
      name: 'appStore',
    }
  )
)
