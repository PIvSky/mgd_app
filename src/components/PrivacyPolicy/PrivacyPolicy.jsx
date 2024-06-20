import './PrivacyPolicy.scss';

const PrivacyPolicy = ({closeModal, dialogRef }) => {
    return (
        <dialog className='modal' ref={dialogRef}>
            <p> Tutaj będzie polityka prywatności </p>
            <p> Tutaj będzie polityka prywatności </p>
            <p> Tutaj będzie polityka prywatności </p>
            <button onClick={closeModal}>Zamknij</button>
        </dialog>
    )
}

export default PrivacyPolicy