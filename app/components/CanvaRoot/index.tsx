"use client"
import { Canvas } from '@react-three/fiber'
import { LoadModels } from '../LoadModels'
import { StrictMode } from 'react'
import styles from './CanvaRoot.module.scss'

export function CanvaRoot() {
  return (
    <section
      className={styles.CanvaRoot}
    >
      <StrictMode>
        <Canvas
          // flat
          dpr={[1, 2]}
          gl={{
            antialias: true,
          }}
        >
          <LoadModels />
        </Canvas>
      </StrictMode>
    </section>
  )
}