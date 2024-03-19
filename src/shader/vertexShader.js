const vertexShader = `
attribute vec4 vertexPosition;

uniform float uTime;

varying vec2 vUv;
varying vec3 vColor;

float PI = 3.141592;


void main() {
    
    vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4( position, 1.0 );

    gl_Position = projectionMatrix * mvPosition;
    vUv = uv;
}

`

export default vertexShader