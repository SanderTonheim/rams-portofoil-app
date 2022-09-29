import styled from 'styled-components'

export const InfoWrapper = styled.div`
	background: blue;
`

export const InfoSec = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	font-family: monospace;
	padding: 100px 0;
	color: #fff;

	display: flex;
	background: ${({ lightBg }) => (lightBg ? '#fff' : '#0a192f')};
`

export const InfoRow = styled.div`
	display: flex;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`

export const InfoColumn = styled.div`
	margin-bottom: 15px;
	padding-right: 15px;
	padding-left: 150px;
	flex: 1;
	max-width: 45%;
	flex-basis: 45%;

	@media screen and (max-width: 768px) {
		max-width: 100%;
		flex-basis: 100%;
		display: flex;
		justify-content: center;
	}
`

export const TextWrapper = styled.div`
	max-width: 600px;
	display: flex;
	flex-direction: column;
	gap: 1.2rem;

	

	#sign-up {
		font-size: 1.4rem;
		color: white;
		text-decoration: none;
	}
	@media screen and (max-width: 768px) {
		padding-bottom: 65px;
	}
`

export const ImgWrapper = styled.div`
	max-width: 300px;
	display: flex;
	display: ${({ visible }) => (visible ? 'visible' : 'none')};

	justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
	margin: 0;
`

export const TopLine = styled.div`
	color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#61dafb')};
	font-size: 28px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
`

export const Img = styled.img`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	max-height: 500px;
`

export const Heading = styled.h1`
	font-size: 80px;
	line-height: 1.1;
	font-weight: 600;
	color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#ccd6f6')};
`

export const Subtitle = styled.p`
	max-width: 440px;
	font-size: 23px;
	line-height: 24px;
	color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#8892b0')};
`
