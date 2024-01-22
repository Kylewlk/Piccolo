#version 310 es

#extension GL_GOOGLE_include_directive : enable

#include "constants.h"

layout(location=0) out vec2 pos;

void main()
{
    const vec3 fullscreen_triangle_positions[3] =
        vec3[3](vec3(3.0, 1.0, 0.5), vec3(-1.0, 1.0, 0.5), vec3(-1.0, -3.0, 0.5));
    pos = fullscreen_triangle_positions[gl_VertexIndex].xy;
    gl_Position = vec4(fullscreen_triangle_positions[gl_VertexIndex], 1.0);
}