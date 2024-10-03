"use client";
import { registerLicense } from "@syncfusion/ej2-base";
import {
  EventSettingsModel,
  Inject,
  ResourceDirective,
  ResourcesDirective,
  ScheduleComponent,
  TimelineViews,
  ViewDirective,
  ViewsDirective,
  Week,
} from "@syncfusion/ej2-react-schedule";
import { Timeline } from "antd";

import React, { useRef } from "react";
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NDaF5cWWtCf1NpRGpGfV5ycEVAallSTnVeUiweQnxTdEFjUH5XcHNUQGBaUUB+Wg=="
);

export default function ScheduleModel() {
  const eventSettings: EventSettingsModel = {
    dataSource: [],
    fields: {
      id: "id",
      subject: { name: "subject" },
      startTime: { name: "startTime" },
      endTime: { name: "endTime" },
      description: { name: "description" },
      isAllDay: { name: "isAllDay" },
    },
  };
  const roomData = [
    { CourtText: "Court 1", Id: 1, CourtColor: "#cb6bb2" },
    { CourtText: "Court 2", Id: 2, CourtColor: "#56ca85" },
  ];
  const group = { resources: ["Courts"] };
  const scheduleRef = useRef(null);

  return (
    <div className="schedule-details">
      <ScheduleComponent
        width="100%"
        height="550px"
        ref={scheduleRef}
        selectedDate={new Date()}
        eventSettings={eventSettings}
        currentView="TimelineDay"
        group={group}
        timeScale={{ interval: 60, slotCount: 1 }}
 
      >
        <ViewsDirective>
          <ViewDirective option="TimelineDay" />
        </ViewsDirective>
        <ResourcesDirective>
          <ResourceDirective
            field="CourtId"
            title="Court"
            name="Courts"
            dataSource={roomData}
            textField="CourtText"
            idField="Id"
            colorField="CourtColor"
          ></ResourceDirective>
        </ResourcesDirective>
        <Inject services={[TimelineViews]} />
      </ScheduleComponent>
    </div>
  );
}
