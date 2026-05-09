/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  icon: string;
  statusRank: string;
  minigameType?: 'puzzle' | 'plates' | 'convection';
}

export interface UserStats {
  points: number;
  completedMissions: string[];
  badges: string[];
  rank: string;
  avatar: string;
  userName: string;
}

export const RANKS = [
  "Laien-Geologe",
  "Feldassistent",
  "Junior-Geologe",
  "Vulkan-Beobachter",
  "Platten-Experte",
  "Geodynamik-Spezialist",
  "Doktor der Seismologie",
  "Uni Professor für Vulkanismus"
];
