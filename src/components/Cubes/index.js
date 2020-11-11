/* eslint-disable import/no-anonymous-default-export */
import React, {useRef} from 'react';
import {map} from 'lodash';
import {useFrame} from 'react-three-fiber';
import Cubes from './Cubes.component';

export default () => {

    const group = useRef();
    useFrame(() => {
        group.current.rotation.y += 0.005;
    })

    const nodesCubes = map(new Array(60), (i) => {
        return <Cubes key = {i} />
    })

    return <group ref={group}>{nodesCubes}</group>
}