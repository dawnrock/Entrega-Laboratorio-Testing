import { mapProjectFromApiToVm } from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import * as map  from 'common/mappers';

describe('/src/pod/project/project.mapper specs', () => {
  describe('mapProjectFromApiToVm', () => {
    it('should return empty project when it feeds undefined', () => {
      // Arrange
      const summary: apiModel.Project = undefined;

      // Act
      const result: viewModel.Project = mapProjectFromApiToVm(summary);


      // Assert
      expect(result).toEqual({
        id: '',
        name: '',
        externalId: '',
        comments: '',
        isActive: false,
        employees: [],
      });

    });

    it('should return empty project when it feeds null', () => {
      // Arrange
      const summary: apiModel.Project = null;

      // Act
      const result: viewModel.Project = mapProjectFromApiToVm(summary);

      // Assert
      expect(result).toEqual({
        id: '',
        name: '',
        externalId: '',
        comments: '',
        isActive: false,
        employees: [],
      });
    });

    it('should return empty project when it feeds empty array', () => {
      // Arrange

      const summary: apiModel.Project = {
        id: '',
        name: '',
        externalId: '',
        comments: '',
        isActive: false,
        employees: [],
      };

      // Act
      const result: viewModel.Project = mapProjectFromApiToVm(summary);

      // Assert
      expect(result).toEqual({
        id: '',
        name: '',
        externalId: '',
        comments: '',
        isActive: false,
        employees: [],
      });
    });

    it('should return array one mapped project when it feed project with two items', () => {
      // Arrange
      const summaryMockEmployee: apiModel.EmployeeSummary[] = [
        {
          id: '5',
          isAssigned: true,
          employeeName: 'Manuel',
        },
        {
          id: '6',
          isAssigned: true,
          employeeName: 'Antonio',
        },
      ];

      const summary: apiModel.Project = {
        id: '1',
        name: 'Nombre',
        isActive: true,
        comments: 'Comentario',
        externalId: '1234',
        employees: summaryMockEmployee,
      };

      // Act
      const result: viewModel.Project = mapProjectFromApiToVm(summary);


      // Assert
      const expectedResult: viewModel.Project = {
        id: '1',
        name: 'Nombre',
        isActive: true,
        comments: 'Comentario',
        externalId: '1234',
        employees: summaryMockEmployee,
      };
      
      expect(result).toEqual(expectedResult);
    });
  });
});
