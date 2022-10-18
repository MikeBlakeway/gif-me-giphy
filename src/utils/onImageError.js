import ErrorImage from '../assets/blank-profile-picture.jpeg'

// we want to check that images will still render even if no url has been provided.
export const onImageError = ({currentTarget}) => {
	currentTarget.onerror = null // prevents looping

	// provide a backup src for a placeholder image
	currentTarget.src = {ErrorImage}
}
