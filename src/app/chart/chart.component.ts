import { DataService } from '../services/data.service';

constructor(private dataService: DataService) {}

ngOnInit(): void {
  this.dataService.getData().subscribe((data) => {
    this.createChart(data);
  });
}

