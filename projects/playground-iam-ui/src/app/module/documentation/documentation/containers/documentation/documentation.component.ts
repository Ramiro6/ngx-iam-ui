import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { NgxTreeNodeComponent } from '@ngx-iam-ui/components/ngx-tree';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss'],
})
export class DocumentationComponent implements OnInit, AfterViewInit {
  @ViewChildren('treeChild') childTreeState: QueryList<NgxTreeNodeComponent>;
  state: boolean;
  items: any[];

  constructor(private activateRoute: ActivatedRoute, private router: Router) {
    // console.log('Three', this.router.isActive(this.router.url, false));
    // this.router.events
    //   .subscribe(s => {
    //   if (s instanceof NavigationEnd) {
    //     console.log(s);
    //     console.log(this.router.isActive('documentation/', false));
    //   }
    // });
    // console.log(this.activateRoute.data);
    // console.log('Router activate', this.childTreeState);
    //
    // this.activateRoute.paramMap.subscribe({
    //   next: (value) => console.log('Parametro', value),
    // });
    // console.log('Route', this.route);
  }

  ngAfterViewInit() {
    this.childTreeState.forEach((ch) => {
      ch.hasChildren.forEach((item) => {
        if (this.router.isActive('documentation/' + item.redirect, false)) {
          ch.isOpen();
          // ch.isExpanded = true;
          console.log('solo uno');
        }
        // item.redirect
      });
    });

    console.log('Router', this.items);
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Welcome',
        redirect: './',
      },
      {
        label: 'Components',
        icon: 'arrow',
        childNode: true,
        children: [
          {
            label: 'Card',
            redirect: 'card',
          },
          {
            label: 'Card Page',
            redirect: 'card-page-id',
          },
          {
            label: 'Tree',
            redirect: 'tree-id',
          },
        ],
      },
      {
        label: 'Components Test',
        icon: 'arrow',
        children: [
          {
            label: 'test-1',
            redirect: 'test-1',
          },
          {
            label: 'test-2',
            redirect: 'test-2',
          },
          {
            label: 'test-3',
            redirect: 'test-3',
          },
        ],
      },
    ];
  }

  onChangeState(childId: number) {
    // console.log(childId);
  }

  onCLick(chItem: number) {
    // console.log(chItem);
  }
}
