import { functions, isEqual, omit } from "lodash"
import React, { useEffect, useRef } from "react"
import { Container } from "react-bootstrap"

function Map({ options, onMount, className }) {
  const divProps = { ref: useRef(), className }

  useEffect(() => {
    const onLoad = () => {
      const map = new window.google.maps.Map(divProps.ref.current, options)
      onMount && onMount(map)
    }
    if (!window.google) {
      const script = document.createElement(`script`)
      script.type = `text/javascript`
      script.src =
        `https://maps.googleapis.com/maps/api/js?key=` +
        process.env.GOOGLE_MAPS_API_KEY
      const headScript = document.getElementsByTagName(`script`)[0]
      headScript.parentNode.insertBefore(script, headScript)
      script.addEventListener(`load`, onLoad)
      return () => script.removeEventListener(`load`, onLoad)
    } else onLoad()
  }, [divProps.ref, onMount, options])

  return (
    <div
      style={{
        padding: "6rem 0 0",
      }}
    >
      <div id="places">
        <Container>
          <h2
            style={{
              marginBottom: "2.5rem",
              fontWeight: 500,
              lineHeight: "1.2",
              padding: "0 0 .5rem",
              borderBottom: "2px solid lightgrey",
              display: "inline-block",
            }}
          >
            Standorte
          </h2>
        </Container>
        <div
          style={{
            height: "50vh",
          }}
          {...divProps}
        />
      </div>
    </div>
  )
}

const shouldUpdate = (prevProps, nextProps) => {
  delete prevProps.options.mapTypeId
  const [prevFuncs, nextFuncs] = [functions(prevProps), functions(nextProps)]
  return (
    isEqual(omit(prevProps, prevFuncs), omit(nextProps, nextFuncs)) &&
    prevFuncs.every(fn => prevProps[fn].toString() === nextProps[fn].toString())
  )
}

export default React.memo(Map, shouldUpdate)

const addMarkers = links => map => {
  links.forEach((link, index) => {
    const marker = new window.google.maps.Marker({
      map,
      position: link.coords,
      label: `${index + 1}`,
      title: link.title,
    })
    marker.addListener(`click`, () => {
      window.location.href = link.url
    })
  })
}

const LAT = parseFloat(48.73)
const LNG = parseFloat(13.49)

Map.defaultProps = {
  options: {
    center: { lat: LAT, lng: LNG },
    zoom: 11,
  },
  onMount: addMarkers([
    {
      coords: {
        lat: LAT,
        lng: LNG,
      },
    },
  ]),
}
