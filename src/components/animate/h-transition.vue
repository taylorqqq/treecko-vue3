<template>
  <div class="h-transition">
    <!-- name="fade" 动画名称 
    tag="ul" 转换的标签 
    appear 第一次渲染时也会有动画 -->
    <TransitionGroup
      name="fade"
      appear
      @before-enter="beforeEnter"
      @enter="enter"
      :tag="props.tag"
    >
      <slot class="item" />
    </TransitionGroup>
  </div>
</template>

<script lang="ts" setup>
import gsap from "gsap";
import { RendererElement } from "vue";

interface IProps {
  tag?: string;
  duration?: number;
  delay?: number;
}
const props = withDefaults(defineProps<IProps>(), {
  tag: "div",
  duration: 0.5,
  delay: 0.1,
});

const beforeEnter = (el: any) => {
  gsap.set(el, { opacity: 0, y: 30 });
};
const enter = (el: RendererElement, done: () => void) => {
  gsap.to(el, {
    opacity: 1, //透明度
    y: 0, //y轴
    duration: props.duration, //持续时间
    delay: el.dataset.index * props.delay, //延迟时间
    onComplete: done, //动画完成后执行done
  });
};
</script>

<style lang="scss" scoped>
.h-transition {
  @apply relative;

  // .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s;
    position: absolute;
    width: 100%;
  }
  .fade-leave-to {
    opacity: 0;
    // transform: translateY(30px);
  }
  .fade-move {
    transition: all 0.5s;
  }
}
</style>
