import NavBar from '../../components/navbar/Navbar'
import {Input, Button, Flex } from "@chakra-ui/react"
import { useHistory} from 'react-router-dom';
import useForm from '../../hooks/useForm'
import axios from 'axios'
import './styles.css';


function LoginPage(){
    const history = useHistory()
    
    const [form, Onchange] = useForm({
        email: "",
        password: ""
    })

    const logIn = () => {
        const body = {
            emailOrNickname: form.email,
            password: form.password
        }
        
        axios.post("http://localhost:3003/user/login", body)
        .then((res) => {
            window.localStorage.setItem("token", res.data.token)
            history.push('/')
        })
        .catch((e) => {
            window.alert(e.message)
        })
        
    }
        
    return(
        <div>
            <NavBar  title={'Login-Page'}/>
            <div className="container" >
               
                <div className="menu">
                    <h1 id="title">
                        Bem-vinda(o) ao Pixalabel!
                    </h1>
                    <Flex className="form">
                        <Input 
                            className="input-login"
                            borderColor="grey"
                            placeholder="E-mail ou Nickname"
                            type="email" 
                            marginY="15px"
                            borderRadius="2xl"
                            name={"email"}
                            onChange={Onchange}
                           
                        />
                        
                        <Input 
                            className="input-login"
                            placeholder="Senha"
                            borderColor="grey"
                            borderRadius="2xl"
                            type="password" 
                            name={"password"}
                            onChange={Onchange}
                        />
                    </Flex>
                    <Button 
                        as="button"
                        bg="#F6AD55"
                        color="black"
                        className="form-button"
                        borderRadius="xl"
                        onClick={logIn}
                    >       Entrar
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;