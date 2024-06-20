import { Message } from "./error.styles"

interface ErrorProps {
  errorMessage: any
}
const FirebaseErrorMessage = ({ errorMessage }: ErrorProps) => {
  console.log(errorMessage)
  return (
    <>
      {errorMessage === "auth/invalid-credential" ? (
        <Message>Invalid Credentials</Message>
      ) : (
        <Message></Message>
      )}
      {errorMessage === "auth/too-many-requests" ? (
        <Message>Try again later</Message>
      ) : (
        <Message></Message>
      )}
    </>
  )
}
export default FirebaseErrorMessage
// error === 'auth/invalid-credential'
