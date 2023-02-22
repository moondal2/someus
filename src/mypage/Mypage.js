import NaviDiary from "../navigation/NaviDiary";

const Mypage = ({ history }) => {

    const handlerPrivate = () => {
        history.push('/개인페이지');
    };

    const handlerShare = () => {
        history.push('/그룹페이지');
    };

    return (
        <>
        <NaviDiary />
            <div className="mypageBackground">
                <div className="mypage">
                    <button className="myD"
                        onClick={handlerPrivate}>
                        <img src={require("./diary_blue.png")} />
                        ID의 일기
                    </button>
                    <button className="groupD"
                        onClick={handlerShare}>
                        <img src={require("./diary_green.png")} />
                        ID의 교환일기
                    </button>
                </div>
            </div>
        </>
    );
};

export default Mypage;