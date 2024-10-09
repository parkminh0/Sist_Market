package com.sist.back.vo.admin;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DealStatisticVO {
    String dayavg, yesterday, today, weekavg, lastweek, thisweek, monthavg, lastmonth, thismonth;
}
