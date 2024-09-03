import { ref, onActivated, onDeactivated } from "vue"

export default function () {

  let element = null

  const isBottom = ref(false)

  const scrollListenerHandler = () => {

  element = element || document.getElementById('content')

  if (!element) {

    return

  }

  const { clientHeight, scrollTop, scrollHeight } = element

  if (clientHeight + scrollTop >= scrollHeight) {

    console.log('最新的到底部了')

    isBottom.value = true

  }

  }

  onActivated(() => {

    element = document.getElementById('content')

    window.addEventListener("scroll", scrollListenerHandler, true)

  })

  onDeactivated(() => {

    window.removeEventListener("scroll", scrollListenerHandler, true)

  })

  return { isBottom }

}

  // 使用方法：

 const scrollListenerHandler = debounce(function() {

  const element = document.querySelector(".page-index")

  // console.log(element)

  if (!element) {

    return

  }

  const { clientHeight, scrollTop, scrollHeight } = element

  // 只能纵向滑动加载 且上次接口返回不为空的场景

  if (Math.abs(lastScroll.value - scrollTop) == 0) return false

  console.log("可滑动", lastScroll)

  if (clientHeight + scrollTop >= scrollHeight) {

    console.log("到底了")

    tempData.value = typeFetch(tabList.value\[currentIndex.value\].type)

    lastScroll.value = scrollTop

    // tableData.value.push(...temp)

    // assignTableData(temp.value)

  }

}, 200)

onMounted(() => {

  window.addEventListener("scroll", scrollListenerHandler, true)

})