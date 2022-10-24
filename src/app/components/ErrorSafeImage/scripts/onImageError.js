import ErrorImage from '../images/blank-profile-picture.jpeg'

// we want to check that images will still render even if no url has been provided.
const onImageError = ({currentTarget}) => {
	currentTarget.onerror = null
	currentTarget.src = {ErrorImage}
}

export default onImageError
