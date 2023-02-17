import { useState } from "react";
import Modal from "../modal/Modal";
import Modal_Group from "../modal/Modal_GroupR";

const Page2 = () => {

    const [modalState, setModalState] = useState(false);

    const closeModal = () => {
        setModalState(false);
    };
    return (
        <>
            <div></div>
            <button value="모달띄우기" className="modalbtn" onClick={() => setModalState(true)}>모달띄우기버튼</button>
            {modalState && <Modal_Group closeModal={closeModal} />}
        </>
    );
};

export default Page2;