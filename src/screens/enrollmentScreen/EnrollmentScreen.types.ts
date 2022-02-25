import type {Navigation, Route} from '@/common/types';

export interface EnrollmentScreenProps {
  navigation: Navigation;
  route: Route;
}

export interface EnrollmentScreenViewProps {
  treinos: any;
  setIsVisible: any;
  setClasstime: any;
  classTime: any;
  isVisible: boolean;
  toggleClassModal: any;
  handleBackButton: any;
  handleOpenCamera: any;
}

export interface sendCodeProps {
  navigation: Navigation;
}
