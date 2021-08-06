import { ReactNode, useRef, useState } from 'react';
import { useEffect } from 'react';
import { Component } from 'react';
import ReactModal from 'react-modal';

interface ModalProps{
  isOpen: boolean;
  setIsOpen: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, setIsOpen, children }: ModalProps) {
  const [modalStatus, setModalStatus] = useState(isOpen);

  const prevIsOpenRef = useRef<boolean>();

  useEffect(() => {
    prevIsOpenRef.current = isOpen; 
  })

  const previousIsOpenValue = prevIsOpenRef.current ?? isOpen;

  useEffect(() => {
    if(previousIsOpenValue !== isOpen){
      setModalStatus(isOpen);
    }
  }, [previousIsOpenValue, isOpen])

  // componentDidUpdate(prevProps) {
  //   const { isOpen } = this.props;

  //   if (prevProps.isOpen !== isOpen) {
  //     console.log(this.props)
  //     this.setState({ modalStatus: isOpen })
  //   }
  // }      

    return (
      <ReactModal
        shouldCloseOnOverlayClick={!false}
        onRequestClose={setIsOpen}
        isOpen={modalStatus}
        ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#F0F0F5',
            color: '#000000',
            borderRadius: '8px',
            width: '736px',
            border: 'none',
          },
          overlay: {
            backgroundColor: '#121214e6',
          },
        }}
      >
        {children}
      </ReactModal>
    );
};

