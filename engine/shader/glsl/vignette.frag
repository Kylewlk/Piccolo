#version 310 es

#extension GL_GOOGLE_include_directive : enable

#include "constants.h"

precision highp float;

layout(input_attachment_index = 0, set = 0, binding = 0) uniform highp subpassInput in_color;

layout(location=0) in vec2 pos;

layout(location = 0) out highp vec4 out_color;

void main()
{
    highp vec4 color = subpassLoad(in_color).rgba;

    float cutoff = 1.0;
    float exponent = 1.5;
    float len = length(pos);
    float ratio = pow(cutoff/len, exponent);
    out_color = color * min(ratio, 1.0);
}
