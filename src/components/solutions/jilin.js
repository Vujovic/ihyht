import React from "react"
import styled from "styled-components"

import { SolutionsTemplate } from "./guangdong"

export default () => {
  return (
    <SolutionsTemplate>
      <div className="solution">
        <div className="text">
          <h2>通化市票流分析项目</h2>
          <p>
            该项目是以企业上下游关系为骨骼，以货物明细进销项为血肉组建起一套完整的票流追溯体系。通过该系统，可以运用大数据算法从海量发票数据中归类挖掘出宏观经济指标用于辅助政府决策分析；可定义纳税人集合进行群体专项分析，支持两层分类；可以构建纳税人票流分析链条，用点线关系展现出纳税人发票开具流向，分析循环开具，发票对开，发票最短路径等各类分析，深度挖掘潜在风险。
            该项目自上线运行以来，得到了各方人员好评，在辅助决策、经济分析、群体分析、风险分析等方面发挥了较大作用。
          </p>
        </div>
      </div>
    </SolutionsTemplate>
  )
}
