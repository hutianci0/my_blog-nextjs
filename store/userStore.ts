import { create } from 'zustand'

interface userInfo {
    id?: number
    nickname?: string
    avatar?: string | null
}

// store 类型
interface userStore {
    userInfo?: userInfo
    setuserInfo: (val: userInfo) => void
}

export const useUserStore = create<userStore>()((set) => {
    return {
        userInfo: {},
        setuserInfo: (val) => set((state) => ({ userInfo: (state.userInfo = val) })),
    }
})
