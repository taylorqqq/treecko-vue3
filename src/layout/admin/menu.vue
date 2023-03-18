<template>
  <div class="hidden md:block menu w-[200px] bg-gray-800 p-2 min-h-screen">
    <div class="logo text-gray-300 flex items-center">
      <i class="fab fa-battle-net text-pink-700 mr-2 text-[26px]"></i>
      <span class="text-[20px]">管理系统</span>
    </div>

    <!-- 菜单 -->
    <div class="left-container text-white">
      <dl v-for="(pmenu, index) in menus" :key="index">
        <dt @click="handeleChoosePMenu(pmenu)">
          <section>
            <i :class="pmenu.meta?.icon"></i>
            <span>{{ pmenu.meta?.title }}</span>
          </section>
          <section>
            <i
              class="fas fa-angle-down duration-100"
              :class="{ 'rotate-180': pmenu.meta?.isCheck }"
            ></i>
          </section>
        </dt>
        <dd
          v-show="pmenu.meta?.isCheck"
          v-for="(cmenu, cindex) in pmenu.children"
          :class="{ active: cmenu.meta?.isCheck }"
          @click="handeleChooseCMenu(pmenu, cmenu)"
        >
          {{ cmenu.meta?.title }}
        </dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { useRouter, RouteRecordNormalized, RouteRecordRaw } from "vue-router";
import { useRouterStore } from "@/store/router";
const router = useRouter();
const { routes: menus } = useRouterStore();

/**
 * @description 选择菜单
 */
const handeleChoosePMenu = (pmenu: RouteRecordNormalized) => {
  // handeleResetMenu(pmenu);
  pmenu.meta.isCheck = !pmenu.meta.isCheck;
  // menus.forEach((item) => {
  //   if (item.meta.title == pmenu.meta.title) {
  //     if (item?.children && item?.children.length > 0) {
  //       handeleChooseCMenu(item, item.children[0]);
  //     }
  //   }
  // });
};
/**
 * @description 选择子菜单
 */
const handeleChooseCMenu = (
  pmenu: RouteRecordNormalized,
  cmenu: RouteRecordRaw
) => {
  handeleResetMenu(pmenu);
  if (cmenu?.meta) {
    cmenu.meta.isCheck = true;
    router.push({
      path: cmenu.path,
    });
  }
};

/**
 * @description 状态重置
 *
 */
const handeleResetMenu = (menu: RouteRecordNormalized) => {
  menus.forEach((pmenu) => {
    if (menu.meta.title != pmenu.meta.title) {
      pmenu.meta.isCheck = false;
    }
    pmenu.children?.forEach((cmenu) => {
      if (cmenu?.meta) {
        cmenu.meta.isCheck = false;
      }
    });
  });
};
</script>

<style scoped lang="scss">
.admin {
  .left-container {
    dl {
      @apply text-gray-300 text-sm;
      dt {
        @apply text-sm mt-6 flex justify-between items-center cursor-pointer;
        section {
          @apply flex items-center;
          i {
            @apply mr-2 text-[24px];
          }
          span {
            @apply text-[14px];
          }
        }
        section {
          i {
            @apply text-[20px];
          }
        }
      }

      dd {
        @apply py-3 pl-4 my-2 rounded-md cursor-pointer bg-gray-700 hover:bg-blue-500 duration-300;
        &.active {
          @apply bg-blue-800 hover:bg-blue-500;
        }
      }
    }
  }
}
</style>
