import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ModalPropsType } from '../../../types'
import { AiOutlineClose } from "react-icons/ai"

export default function Modal({
    isOpen,
    setIsOpen,
    title,
    children
}:ModalPropsType) {

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-500 transform"
                enterFrom="translate-y-1/2"
                enterTo="translate-y-0"
                leave="transition ease-in-out duration-500 transform"
                leaveFrom="translate-y-0"
                leaveTo="translate-y-full"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg p-6 font-medium leading-6 text-gray-900 text-center items-center border-b border-gray-3600"
                  >
                    <div onClick={closeModal} className="float-left hover:text-gray-700 cursor-pointer">
                        <AiOutlineClose/>
                    </div>
                    {title}
                  </Dialog.Title>
                  <div className="px-6 pt-2 p-b-6">
                    {children}
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
