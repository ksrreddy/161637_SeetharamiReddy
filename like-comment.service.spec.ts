import { TestBed, inject } from '@angular/core/testing';

import { LikeCommentService } from './like-comment.service';

describe('LikeCommentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LikeCommentService]
    });
  });

  it('should be created', inject([LikeCommentService], (service: LikeCommentService) => {
    expect(service).toBeTruthy();
  }));
});
