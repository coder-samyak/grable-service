import type { ComponentType } from "react";
import type { MockupKey } from "../../../data/journey";
import { CrtTerminal } from "./CrtTerminal";
import { RetroBrowser } from "./RetroBrowser";
import { StartCenter } from "./StartCenter";
import { MasDashboard } from "./MasDashboard";
import { CopilotChat } from "./CopilotChat";
import { AgentFeed } from "./AgentFeed";

export const mockupRegistry: Record<MockupKey, ComponentType<{ active: boolean }>> = {
  crt: CrtTerminal,
  retroBrowser: RetroBrowser,
  startCenter: StartCenter,
  masDashboard: MasDashboard,
  copilotChat: CopilotChat,
  agentFeed: AgentFeed
};
