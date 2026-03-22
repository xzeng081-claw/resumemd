import { create } from 'zustand'

export interface EditorState {
  content: string
  title: string
  isSaving: boolean
  lastSaved: Date | null
  setContent: (content: string) => void
  setTitle: (title: string) => void
  save: () => Promise<void>
}

const useEditorStore = create<EditorState>((set, get) => ({
  content: '# 我的简历\n\n开始编辑你的简历...',
  title: '未命名简历',
  isSaving: false,
  lastSaved: null,
  
  setContent: (content) => set({ content }),
  
  setTitle: (title) => set({ title }),
  
  save: async () => {
    set({ isSaving: true })
    // TODO: 调用 API 保存
    await new Promise(resolve => setTimeout(resolve, 500))
    set({ isSaving: false, lastSaved: new Date() })
  },
}))

export default useEditorStore
