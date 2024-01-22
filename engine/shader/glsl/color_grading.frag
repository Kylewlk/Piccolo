#version 310 es

#extension GL_GOOGLE_include_directive : enable

#include "constants.h"

precision highp float;


layout(input_attachment_index = 0, set = 0, binding = 0) uniform highp subpassInput in_color;

layout(set = 0, binding = 1) uniform sampler2D color_grading_lut_texture_sampler;

layout(location = 0) out highp vec4 out_color;

void main()
{
    highp ivec2 lut_tex_size = textureSize(color_grading_lut_texture_sampler, 0);
    highp float _COLORS      = float(lut_tex_size.x)/float(lut_tex_size.y);

    highp vec4 color       = subpassLoad(in_color).rgba;

    float f = color.b * _COLORS;

    vec4 c1 = texture(color_grading_lut_texture_sampler, vec2((floor(f) + color.r)/_COLORS, color.b));
    vec4 c2 = texture(color_grading_lut_texture_sampler, vec2((ceil(f) + color.r)/_COLORS, color.b));

    out_color = mix(c1, c2, f - floor(f));
}
