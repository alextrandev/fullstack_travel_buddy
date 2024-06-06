import 'ldrs/infinity'
import 'ldrs/dotPulse'
import 'ldrs/grid'

export default function Loading({ type }) {
  if (type == "inf") {
    return (
      <l-infinity
        size="100"
        stroke="4"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="1.3"
        color="black"
      ></l-infinity>
    )
  }

  if (type == "dot") {
    return (
      <l-dot-pulse
        size="12"
        speed="2"
        color="#00000070"
      ></l-dot-pulse>
    )
  }

  if (type == "grid") {
    return (
      <l-grid
        size="50"
        speed="1.5"
        color="black"
      ></l-grid>
    )
  }
}
