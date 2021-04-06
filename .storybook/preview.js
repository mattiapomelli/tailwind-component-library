import "../src/styles/globals.css"

import * as nextImage from "next/image"

// or global addParameters
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

// Replace next/image for Storybook
Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => {
    const { width, height, layout } = props

    if (layout === "fill") {
      return (
        <img
          style={{
            objectFit: "cover",
            position: "absolute",
            width: "100%",
            height: "100%"
          }}
          {...props}
        />
      )
    }

    const ratio = (height / width) * 100

    return (
      <div
        style={{
          paddingBottom: `${ratio}%`,
          position: "relative"
        }}
      >
        <img
          style={{
            objectFit: "cover",
            position: "absolute",
            width: "100%",
            height: "100%"
          }}
          {...props}
        />
      </div>
    )
  }
})
