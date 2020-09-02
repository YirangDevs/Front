import store from "../store/store"
import ACTION from "../store/actions/action"

export default function() {
    const ACCESS_TOKEN = localStorage.getItem("KAKAO_ACCESS_TOKEN")
    window.Kakao.Auth.setAccessToken(ACCESS_TOKEN);
    window.Kakao.API.request({
        url: '/v2/user/me',
        success: function(res) {
            store.dispatch({type:ACTION.LOGIN})
            store.dispatch({
                type:ACTION.SET_USER,
                user : { username : res.properties.nickname }
            })
        },
        fail: function(error) {
            
          console.log(
            'login success, but failed to request user information: ' +
              JSON.stringify(error)
          )
          alert("토큰이 만료 되었습니다. 다시 로그인 해주세요")
          localStorage.removeItem("KAKAO_ACCESS_TOKEN")
        },
      })
}

