import React from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types'
import { LoadingOutlined } from '@ant-design/icons';

const Icon = <LoadingOutlined style={{ fontSize: 35 }} spin />

const style = {
	height: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}

const Loading = (props) => {
	const { align, cover } = props
	return (
		<div className={`loading text-${align} cover-${cover}`} style={style}>
			<Spin indicator={Icon} />
		</div>
	)
}

Loading.propTypes = {
	size: PropTypes.string,
	cover: PropTypes.string
}

Loading.defaultProps = {
	align: 'center',
	cover: 'inline'
};

export default Loading