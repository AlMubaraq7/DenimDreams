import { Message } from "./error.styles"
import { useAppSelector } from "../../app/hooks"
const FirebaseErrorMessage = () => {
  const err = useAppSelector((state) => state.user?.error)
  console.log(err)
  return (
    <>
      {err && err.code === "auth/invalid-credential" ? (
        <Message>Invalid Credentials</Message>
      ) : (
        <Message></Message>
      )}
      {err && err.code === "auth/too-many-requests" ? (
        <Message>Try again later</Message>
      ) : (
        <Message></Message>
      )}
    </>
  )
}
export default FirebaseErrorMessage
// error === 'auth/invalid-credential'
