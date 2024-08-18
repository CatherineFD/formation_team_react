import React, {useContext} from 'react';
import Loader from "../components/UI/Loader/Loader";
import {useNavigate, useParams} from "react-router-dom";
import ButtonSetting from "../components/UI/ButtonSetting/ButtonSetting";
import "../style/User.scss";
import user_image from "../assets/user/user.png";
import UserMenuTests from "../components/user/UserMenuTests/UserMenuTests";
import {UserContext} from "../context/UserContext";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import ResultTestCompetence from "../components/user/ResultTestCompetence/ResultTestCompetence";

const User = () => {
    const params = useParams();
    const [isLoading, setLoading] = React.useState(false);
    const [menuView, setMenuView] = React.useState('');
    // const [user, setUser] = React.useState({firstName: 'Екатерина', lastName: 'Фирсова', email: '1111@yandex.ru'});
    const {user} = useContext(UserContext);


    const router = useNavigate();

    const changeTest = (event, numberTest) => {

    }

    function getUser(id) {
        if(id !== '') {

        }
    }



    return (
        <div >
            {
                (isLoading)
                ?
                    <Loader/>
                :
                    <div id="user" >
                        <div className="user__title">
                            <div className="mr-3 user__img">
                                <img src={user_image} alt="user"/>
                                {/*<img alt="user" src="../assets/user/user.png"/>*/}
                            </div>

                            <div className="user__name d-flex  flex-row">
                                <div className="d-flex flex-column justify-content-center">
                                    <h3>{ user.firstName } { user.lastName }</h3>
                                    <h4 className="text-uppercase"> { user.email }</h4>
                                </div>

                                {/*v-if="!$route.params.id"*/}
                                <ButtonSetting onClick={() => router('/users/setting')}/>
                            </div>

                        </div>
                        {/*Number($route.query.show)*/}
                        <UserMenuTests numberTest={menuView || 3} onChange={changeTest}/>

                        <button onClick={() => router('/test-competence')}>Пройти тест</button>

                        <div className="d-flex justify-content-between">
                            <TransitionGroup>
                                {(menuView === 3) &&
                                    <ResultTestCompetence result={user['competenceResult']}></ResultTestCompetence>
                                    }


                            </TransitionGroup>

                        </div>
                    </div>
            }
            
        </div>
    );
};

export default User;