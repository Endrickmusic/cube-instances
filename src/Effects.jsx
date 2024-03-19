import { EffectComposer, SSR } from '@react-three/postprocessing'
import { useControls } from 'leva'

export function Effects() {
  const { enabled, ...props } = useControls({
    enabled: true,
    temporalResolve: false,
    STRETCH_MISSED_RAYS: false,
    USE_MRT: false,
    USE_NORMALMAP: false,
    USE_ROUGHNESSMAP: false,
    ENABLE_JITTERING: false,
    ENABLE_BLUR: true,
    temporalResolveMix: { value: 0.9, min: 0, max: 1 },
    temporalResolveCorrectionMix: { value: 0.25, min: 0, max: 1 },
    maxSamples: { value: 0.2, min: 0, max: 1 },
    resolutionScale: { value: 1.0, min: 0, max: 1 },
    blurMix: { value: 0.5, min: 0, max: 1 },
    blurKernelSize: { value: 2, min: 0, max: 8 },
    blurSharpness: { value: 0.5, min: 0, max: 1 },
    rayStep: { value: 0.1, min: 0, max: 1 },
    intensity: { value: 0.3, min: 0, max: 5 },
    maxRoughness: { value: 0.15, min: 0, max: 1 },
    jitter: { value: 0.1, min: 0, max: 5 },
    jitterSpread: { value: 0.9, min: 0, max: 1 },
    jitterRough: { value: 0.1, min: 0, max: 1 },
    roughnessFadeOut: { value: 0.2, min: 0, max: 1 },
    rayFadeOut: { value: 0.4, min: 0, max: 1 },
    MAX_STEPS: { value: 4, min: 0, max: 20 },
    NUM_BINARY_SEARCH_STEPS: { value: 2, min: 0, max: 10 },
    maxDepthDifference: { value: 2, min: 0, max: 10 },
    maxDepth: { value: 0.5, min: 0, max: 1 },
    thickness: { value: 2, min: 0, max: 10 },
    ior: { value: 1.45, min: 0, max: 2 },
  })
  return <EffectComposer >
    {enabled && <SSR {...props} />}
    </EffectComposer>
}
