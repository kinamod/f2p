import styles from './styles.module.css';

interface TeaserItem {
  heading: string;
  subheading: string;
  mediaType: 'video' | 'image';
  mobileImageUrl: string;
  mobilePosterUrl: string;
  mobileVideoMp4Url: string;
  mobileVideoWebmUrl: string;
  desktopImageUrl: string;
  desktopPosterUrl: string;
  desktopVideoMp4Url: string;
  desktopVideoWebmUrl: string;
}

interface FeatureTeaserProps {
  items?: TeaserItem[];
}

const defaultItems: TeaserItem[] = [
  {
    heading: 'Into robotics?',
    subheading: 'Nemo shows you the smartest movers.',
    mediaType: 'video',
    mobileImageUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790cabee91a93b10e8a77ca_nemo-robot-mobile-poster-00001.jpg',
    mobilePosterUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790cabee91a93b10e8a77ca_nemo-robot-mobile-poster-00001.jpg',
    mobileVideoMp4Url:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790cabee91a93b10e8a77ca_nemo-robot-mobile-transcode.mp4',
    mobileVideoWebmUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790cabee91a93b10e8a77ca_nemo-robot-mobile-transcode.webm',
    desktopImageUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/678d0ad7ff5a494a8392ac60_nemo_robot-poster-00001.jpg',
    desktopPosterUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/678d0ad7ff5a494a8392ac60_nemo_robot-poster-00001.jpg',
    desktopVideoMp4Url:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/678d0ad7ff5a494a8392ac60_nemo_robot-transcode.mp4',
    desktopVideoWebmUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/678d0ad7ff5a494a8392ac60_nemo_robot-transcode.webm',
  },
  {
    heading: 'Think flying cars are the future?',
    subheading: 'Nemo will shows you the take-off models.',
    mediaType: 'video',
    mobileImageUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790cb18fb3dba5779915289_nemo-car-mobile-poster-00001.jpg',
    mobilePosterUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790cb18fb3dba5779915289_nemo-car-mobile-poster-00001.jpg',
    mobileVideoMp4Url:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790cb18fb3dba5779915289_nemo-car-mobile-transcode.mp4',
    mobileVideoWebmUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790cb18fb3dba5779915289_nemo-car-mobile-transcode.webm',
    desktopImageUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790c9c5098af4e5c970c93b_nemo-car-poster-00001.jpg',
    desktopPosterUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790c9c5098af4e5c970c93b_nemo-car-poster-00001.jpg',
    desktopVideoMp4Url:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790c9c5098af4e5c970c93b_nemo-car-transcode.mp4',
    desktopVideoWebmUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790c9c5098af4e5c970c93b_nemo-car-transcode.webm',
  },
  {
    heading: 'Betting women-led companies will outperform?',
    subheading: 'Nemo picks you the trailblazers.',
    mediaType: 'video',
    mobileImageUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790cb4c8ea29a545b6ed326_nemo-nefertiti-mobile-poster-00001.jpg',
    mobilePosterUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790cb4c8ea29a545b6ed326_nemo-nefertiti-mobile-poster-00001.jpg',
    mobileVideoMp4Url:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790cb4c8ea29a545b6ed326_nemo-nefertiti-mobile-transcode.mp4',
    mobileVideoWebmUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790cb4c8ea29a545b6ed326_nemo-nefertiti-mobile-transcode.webm',
    desktopImageUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790ca4109d3d0d6c9cba4c9_nemo-nefertiti-poster-00001.jpg',
    desktopPosterUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790ca4109d3d0d6c9cba4c9_nemo-nefertiti-poster-00001.jpg',
    desktopVideoMp4Url:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790ca4109d3d0d6c9cba4c9_nemo-nefertiti-transcode.mp4',
    desktopVideoWebmUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790ca4109d3d0d6c9cba4c9_nemo-nefertiti-transcode.webm',
  },
];

export default function FeatureTeaser({ items = defaultItems }: FeatureTeaserProps) {
  return (
    <div className={styles.teaserSection}>
      <div className={styles.teaserContainer}>
        <div className={styles.teaserGrid}>
          <div className={styles.teaserColumn}>
            {items.map((item) => (
              <div key={item.heading} className={styles.teaserCopyWrap}>
                <div className={styles.mobileMediaWrap}>
                  {item.mediaType === 'image' ? (
                    <img
                      className={styles.mobileMedia}
                      src={item.mobileImageUrl}
                      alt={item.heading}
                    />
                  ) : (
                    <video
                      className={styles.mobileMedia}
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster={item.mobilePosterUrl}
                    >
                      <source src={item.mobileVideoMp4Url} type="video/mp4" />
                      <source src={item.mobileVideoWebmUrl} type="video/webm" />
                    </video>
                  )}
                </div>
                <div className={styles.teaserCopy}>
                  <h3 className={styles.teaserHeading}>{item.heading}</h3>
                  <h3 className={styles.teaserSubheading}>{item.subheading}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.teaserColumn}>
            <div className={styles.stickyImageWrap}>
              {items.map((item, index) =>
                item.mediaType === 'image' ? (
                  <img
                    key={item.heading}
                    className={styles.stackedMedia}
                    style={{ zIndex: items.length - index }}
                    src={item.desktopImageUrl}
                    alt={item.heading}
                  />
                ) : (
                  <video
                    key={item.heading}
                    className={styles.stackedMedia}
                    style={{ zIndex: items.length - index }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={item.desktopPosterUrl}
                  >
                    <source src={item.desktopVideoMp4Url} type="video/mp4" />
                    <source src={item.desktopVideoWebmUrl} type="video/webm" />
                  </video>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
