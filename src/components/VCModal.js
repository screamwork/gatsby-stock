import React from "react"
import { Image, Modal } from "react-bootstrap"

export const VCModal = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Image src={props.modal.img} style={{ width: "100%" }} />
      </Modal.Body>
    </Modal>
  )
}
