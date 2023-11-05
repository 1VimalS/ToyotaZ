// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'

import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}

import { RecoilRoot, atom } from "recoil";
export const userData = atom({
  key: "TodoList",
  default: {
    points: 0,
    score: 0,
    weakest: 'lane departure',
    weakest_score: 0,
    exp: 0,
    level: 0,
  },
  effects_UNSTABLE: [persistAtom],
});

export function RecoidContextProvider({ children }: { children: React.ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}