import { RotatingLines } from 'react-loader-spinner'
import { LoaderWrapper } from './Loader.styled'

export const Loader = () => {
	return (
		<LoaderWrapper>
			{<RotatingLines
				strokeColor="grey"
				strokeWidth="5"
				animationDuration="0.75"
				width="120"
				visible={true}
			/>}
		</LoaderWrapper>
	);
};