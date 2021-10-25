export default `<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" targetNamespace="http://www.flowable.org/processdef">
  <process id="process_1623139894691" name="name_ep6b22mi" isExecutable="true">
    <startEvent id="Event_0gly3pi" name="开始">
      <outgoing>Flow_1htw92l</outgoing>
    </startEvent>
    <userTask id="Activity_0tj581p" name="操作" camunda:taskType="2" camunda:dealType="0" camunda:approvalUsers="%5B%5D" camunda:approvalUsersNames="%5B%5D" camunda:fieldsReal="%5B%5D" camunda:warn="%5B%5D" camunda:usersName="%5B%5D">
      <documentation>{"id":"Activity_0tj581p","type":2,"des":"","users":[],"waitTime":"","waitTimeType":"","warn":[],"dealType":0,"fields":[]}</documentation>
      <extensionElements>
        <camunda:taskListener class="com.boot.base.common.util.workflow.TaskCreateListener" event="create" />
        <camunda:taskListener class="com.boot.base.common.util.workflow.TaskCompleteListener" event="complete" />
      </extensionElements>
      <incoming>Flow_1htw92l</incoming>
      <outgoing>Flow_1w1ubgj</outgoing>
    </userTask>
    <endEvent id="Event_04wsd1d" name="结束">
      <extensionElements>
        <camunda:executionListener class="com.boot.base.common.util.workflow.EndListener" event="end" />
      </extensionElements>
      <incoming>Flow_1w1ubgj</incoming>
    </endEvent>
    <sequenceFlow id="Flow_1htw92l" sourceRef="Event_0gly3pi" targetRef="Activity_0tj581p" />
    <sequenceFlow id="Flow_1w1ubgj" sourceRef="Activity_0tj581p" targetRef="Event_04wsd1d" />
    <group id="Group_0mh6p36" categoryValueRef="CategoryValue_1p7sxin" />
  </process>
  <category id="Category_18p6x23">
    <categoryValue id="CategoryValue_1p7sxin" />
  </category>
  <bpmndi:BPMNDiagram id="BPMNDiagram_flow">
    <bpmndi:BPMNPlane id="BPMNPlane_flow" bpmnElement="process_1623139894691">
      <bpmndi:BPMNEdge id="Flow_1htw92l_di" bpmnElement="Flow_1htw92l">
        <di:waypoint x="95" y="90" />
        <di:waypoint x="95" y="188" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1w1ubgj_di" bpmnElement="Flow_1w1ubgj">
        <di:waypoint x="95" y="222" />
        <di:waypoint x="95" y="320" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Event_0gly3pi_di" bpmnElement="Event_0gly3pi">
        <omgdc:Bounds x="75" y="50" width="40" height="40" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="84" y="26" width="22" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0tj581p_di" bpmnElement="Activity_0tj581p">
        <omgdc:Bounds x="45" y="188" width="100" height="34" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_04wsd1d_di" bpmnElement="Event_04wsd1d">
        <omgdc:Bounds x="75" y="320" width="40" height="40" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="84" y="363" width="22" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Group_0mh6p36_di" bpmnElement="Group_0mh6p36">
        <omgdc:Bounds x="-70" y="-10" width="330" height="430" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>

`
